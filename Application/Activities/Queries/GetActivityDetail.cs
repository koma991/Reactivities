using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityDetail
{
    public class Query : IRequest<Activity>
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Activity>
    {
        public async Task<Activity> Handle(Query query, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([query.Id], cancellationToken);
            if(activity is null) throw new Exception("未找到活动详情");

            return activity;
        }
    }
}
