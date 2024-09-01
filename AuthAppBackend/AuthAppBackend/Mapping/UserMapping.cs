using AuthAppBackend.Dtos;
using AuthAppBackend.Entity;

namespace AuthAppBackend.Mapping
{
    public static class UserMapping
    {
        public static UserDetailResponse ToUserDetailResponse(this User user)
        {
            return new UserDetailResponse
            {
                Id = user.Id,
                UserName = user.UserName,
                Email = user.Email,
            };
        }
    }
}
