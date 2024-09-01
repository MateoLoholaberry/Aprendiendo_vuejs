using AuthAppBackend.Dtos;
using AuthAppBackend.Entity;

namespace AuthAppBackend.Mapping
{
    public static class NotesMapping
    {
        public static NoteDetailResponse ToNoteDetailResponse(this Notes note)
        {
            return new NoteDetailResponse
            {
                Id = note.Id,
                Title = note.Title,
                Contenido = note.Contenido,
                User = note.User.ToUserDetailResponse(),
            };
        }

        public static List<NoteDetailResponse> ToListNoteDetailResponse(this List<Notes>? notes)
        {
            List<NoteDetailResponse> list = new List<NoteDetailResponse>();

            if (notes == null) return list;

            foreach (var note in notes)
            {
                list.Add(note.ToNoteDetailResponse());
            }

            return list;
        }

        public static Notes ToNoteEntity(this NoteCreateRequest note)
        {
            return new Notes
            {
                Title = note.Title,
                Contenido = note.Contenido,
            };
        }

        public static Notes UpdateNoteEntity(this Notes note, NoteUpdateRequest noteDto)
        {
            note.Title = noteDto.Title;
            note.Contenido = noteDto.Contenido;

            return note;
        }
    }
}
