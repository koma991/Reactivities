using Application.Activities.Queries;
using Domain;
using Domain.DTO;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors(option =>
{
    option.AddPolicy("CorsPolicy", policy =>
    {
        policy.AllowAnyHeader()
              .AllowAnyMethod()
              .WithOrigins("http://localhost:3000", "https://localhost:3000");
    });
});

builder.Services.AddMediatR(x =>
{
    x.RegisterServicesFromAssemblyContaining<GetActivitiesList.Handler>();
});

builder.Services.AddAutoMapper(cfg =>
{
    cfg.CreateMap<EditActivityDTO, Activity>();
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors("CorsPolicy");

app.MapControllers();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
    var context = services.GetRequiredService<AppDbContext>();
    await context.Database.MigrateAsync();
    await DbInitializer.SeedData(context);
}
catch(Exception e)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(e, "数据库迁移异常");
}

app.Run();
