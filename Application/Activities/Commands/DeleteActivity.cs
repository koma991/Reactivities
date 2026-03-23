using System;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Commands;

public class DeleteActivity
{
    public class Command : IRequest
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command command, CancellationToken cancellationToken)
        {
            var result = await context.Activities.Where(activity => activity.Id == command.Id).ExecuteDeleteAsync(cancellationToken);

            if(result is 0) throw new Exception("要删除的 Activity 不存在");
        }
    }
}
