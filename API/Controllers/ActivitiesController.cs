using System;
using Application.Activities.Commands;
using Application.Activities.Queries;
using Domain;
using Domain.DTO;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivitiesAsync()
    {
        return Ok(await Mediator.Send(new GetActivitiesList.Query()));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityAsync(string id)
    {
        return Ok(await Mediator.Send(new GetActivityDetail.Query() {Id = id}));
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateActivityAsync(CreateActivityDTO activityDTO)
    {
        return Ok(await Mediator.Send(new CreateActivity.Command(){ ActivityDTO = activityDTO }));
    }

    [HttpPut]
    public async Task<ActionResult<EditActivityDTO>> EditActivityAsync(EditActivityDTO editActivityDTO)
    {
        return Ok(await Mediator.Send(new EditActivity.Command() { EditActivityDTO = editActivityDTO }));
    }
}
