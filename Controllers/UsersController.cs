using DatingApp.Data;
using DatingApp.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController: ControllerBase
    {
        private readonly DataContext _dataContext;
        public UsersController(DataContext context)
        {
            _dataContext = context;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            var user = await _dataContext.Users.FindAsync(id);

            if(user == null) return NotFound();

            return user;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(int id)
        {
            var users = await _dataContext.Users.ToListAsync();

            return users;

        }

    }
}
