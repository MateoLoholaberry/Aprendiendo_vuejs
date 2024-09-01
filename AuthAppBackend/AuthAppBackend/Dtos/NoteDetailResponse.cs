namespace AuthAppBackend.Dtos
{
    public record NoteDetailResponse
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Contenido { get; set; }
        public UserDetailResponse User { get; set; }
    }
}
