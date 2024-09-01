using AuthAppBackend.Data;
using AuthAppBackend.Dtos;
using AuthAppBackend.Entity;
using AuthAppBackend.Mapping;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;

namespace AuthAppBackend.Endpoints
{
    public static class NotesEndpoints
    {
        public static void MapNotesEndpoints(this WebApplication app)
        {
            app.MapGet("/notes", async (DataContext dataContext, HttpContext httpContext) =>
            {
                var userName = httpContext.User.Identity.Name;
                var userEntity = dataContext.Users.FirstOrDefault(u => u.UserName == userName);

                if (userEntity != null)
                {
                    var noteList = await dataContext.Notes.Where(n => n.UserId == userEntity.Id).ToListAsync();
                    return Results.Ok(noteList.ToListNoteDetailResponse());
                }

                return Results.NotFound("Usuario no encontrado");
            })
            .RequireAuthorization()
            .WithTags("Notes")
            .WithDescription("Get all notes")
            .Produces(StatusCodes.Status200OK);


            app.MapGet("/notes/{id}", async (DataContext dataContext, HttpContext httpContext, int id) =>
            {
                var userName = httpContext.User.Identity.Name;
                var userEntity = dataContext.Users.FirstOrDefault(u => u.UserName == userName);

                var note = await dataContext.Notes.Where(n => n.UserId == userEntity.Id && n.Id == id).SingleOrDefaultAsync();

                if (note == null)
                {
                    return Results.NotFound();
                }

                return Results.Ok(note.ToNoteDetailResponse());
            })
            .RequireAuthorization()
            .WithTags("Notes")
            .Produces(StatusCodes.Status200OK);


            app.MapPost("/notes", async (DataContext dataContext, HttpContext httpContext, NoteCreateRequest noteDto) =>
            {
                var userName = httpContext.User.Identity.Name;
                var userEntity = dataContext.Users.FirstOrDefault(u => u.UserName == userName);
                var newNote = noteDto.ToNoteEntity();
                newNote.UserId = userEntity.Id;

                dataContext.Notes.Add(newNote);
                await dataContext.SaveChangesAsync();
                return Results.Created($"/notes/{newNote.Id}", newNote.ToNoteDetailResponse());
            })
            .RequireAuthorization()
            .WithTags("Notes")
            .Produces(StatusCodes.Status201Created)
            .WithOpenApi();


            app.MapPut("/notes/{id}", async (DataContext dataContext, HttpContext httpContext, int id, NoteUpdateRequest note) =>
            {
                var userName = httpContext.User.Identity.Name;
                var userEntity = dataContext.Users.FirstOrDefault(u => u.UserName == userName);

                var noteEntity = await dataContext.Notes.Where(n => n.UserId == userEntity.Id && n.Id == id).SingleOrDefaultAsync();

                if (noteEntity == null)
                {
                    return Results.NotFound();
                }
                
                noteEntity.UpdateNoteEntity(note);

                dataContext.Entry(noteEntity).State = EntityState.Modified;
                await dataContext.SaveChangesAsync();
                return Results.NoContent();
            })
            .RequireAuthorization()
            .WithTags("Notes")
            .Produces(StatusCodes.Status204NoContent)
            .WithOpenApi();


            app.MapDelete("notes/{id}", async (DataContext dataContext, HttpContext httpContext, int id) =>
            {
                var userName = httpContext.User.Identity.Name;
                var userEntity = dataContext.Users.FirstOrDefault(u => u.UserName == userName);

                var noteEntity = await dataContext.Notes.Where(n => n.UserId == userEntity.Id && n.Id == id).SingleOrDefaultAsync();

                if (noteEntity == null)
                {
                    return Results.NotFound();
                }

                dataContext.Notes.Remove(noteEntity);
                await dataContext.SaveChangesAsync();
                return Results.NoContent();

            })
            .RequireAuthorization()
            .WithTags("Notes")
            .Produces(StatusCodes.Status204NoContent)
            .Produces(StatusCodes.Status404NotFound)
            .WithOpenApi();


            app.MapPost("/logout", async (SignInManager<User> signInManager, [FromBody] object empty) =>
            {
                if (empty != null)
                {
                    await signInManager.SignOutAsync();
                    return Results.Ok();
                }

                return Results.Unauthorized();
            })
            .RequireAuthorization()
            .WithOpenApi();
        }
    }
}
