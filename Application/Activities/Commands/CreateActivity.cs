using System;
using Domain;
using Domain.DTO;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class CreateActivity
{
    public class Command : IRequest<string>
    {
        public required CreateActivityDTO ActivityDTO { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command command, CancellationToken cancellationToken)
        {
            Activity activity = new Activity
            {
                Title = command.ActivityDTO.Title,
                Category = command.ActivityDTO.Category,
                Description = command.ActivityDTO.Description,
                City = command.ActivityDTO.City,
                Venue = command.ActivityDTO.Venue,
                Latitude = command.ActivityDTO.Latitude,
                Longitude = command.ActivityDTO.Longitude
            };
            context.Activities.Add(activity);
            var result = await context.SaveChangesAsync(cancellationToken);
            if(result != 1) throw new Exception("创建活动异常");
            return activity.Id;
        }
    }
}
