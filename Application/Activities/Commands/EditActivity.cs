using System;
using AutoMapper;
using Domain;
using Domain.DTO;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity
{
    public class Command : IRequest<EditActivityDTO>
    {
        public required EditActivityDTO EditActivityDTO;
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command, EditActivityDTO>
    {
        public async Task<EditActivityDTO> Handle(Command command, CancellationToken cancellationToken)
        {
           var activity = await context.Activities.FindAsync([command.EditActivityDTO.Id], cancellationToken) ?? throw new Exception("找不到需要修改的Activity");

           mapper.Map(command.EditActivityDTO, activity);
           
           await context.SaveChangesAsync();

           return command.EditActivityDTO;
        }
    }
}
