using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivitiesAsync()
    {
        return Ok(await context.Activities.ToListAsync());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityAsync(string id)
    {
        var activity = await context.Activities.FindAsync(id);
        if(activity is null) return NotFound();

        return Ok(activity);
    }
}
