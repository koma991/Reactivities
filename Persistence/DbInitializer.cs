using System;
using Domain;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context)
    {
        if(context.Activities.Any()) return;

        List<Activity> activities = new List<Activity>
        {
            new Activity
            {
                Title = "马拉松",
                Date = DateTime.Now.AddDays(-1),
                Description = "一场长距离的跑步比赛。",
                Category = "运动",
                IsCancelled = false,
                City = "纽约",
                Venue = "中央公园",
                Latitude = 40.785091,
                Longitude = -73.968285
            },
            new Activity
            {
                Title = "科技大会",
                Date = DateTime.Now.AddDays(-3),
                Description = "关于最新科技的会议。",
                Category = "会议",
                IsCancelled = false,
                City = "旧金山",
                Venue = "莫斯科尼中心",
                Latitude = 37.7833,
                Longitude = -122.4167
            },
            new Activity
            {
                Title = "音乐会",
                Date = DateTime.Now.AddDays(-5),
                Description = "流行乐队的现场音乐会。",
                Category = "音乐",
                IsCancelled = false,
                City = "洛杉矶",
                Venue = "好莱坞 Bowl",
                Latitude = 34.1129,
                Longitude = -118.3406
            },
            new Activity
            {
                Title = "瑜伽静修",
                Date = DateTime.Now.AddDays(-7),
                Description = "一个安静的周末，进行瑜伽和冥想。",
                Category = "健康",
                IsCancelled = false,
                City = "巴厘岛",
                Venue = "乌布静修中心",
                Latitude = -8.5108,
                Longitude = 115.2632
            },
            new Activity
            {
                Title = "美食节",
                Date = DateTime.Now.AddDays(-10),
                Description = "探索本地小摊的美食与饮品。",
                Category = "美食",
                IsCancelled = false,
                City = "芝加哥",
                Venue = "格兰特公园",
                Latitude = 41.8781,
                Longitude = -87.6298
            },
            new Activity
            {
                Title = "艺术展览",
                Date = DateTime.Now.AddDays(-12),
                Description = "展示现代艺术的展览。",
                Category = "艺术",
                IsCancelled = false,
                City = "巴黎",
                Venue = "卢浮宫博物馆",
                Latitude = 48.8606,
                Longitude = 2.3376
            },
            new Activity
            {
                Title = "科技创业公司路演",
                Date = DateTime.Now.AddDays(-15),
                Description = "科技创业公司向投资人展示他们的项目。",
                Category = "商业",
                IsCancelled = false,
                City = "柏林",
                Venue = "创业中心",
                Latitude = 52.5200,
                Longitude = 13.4050
            },
            new Activity
            {
                Title = "时尚秀",
                Date = DateTime.Now.AddDays(-17),
                Description = "展示最新的时尚潮流。",
                Category = "时尚",
                IsCancelled = false,
                City = "米兰",
                Venue = "米兰时装周",
                Latitude = 45.4654,
                Longitude = 9.1859
            },
            new Activity
            {
                Title = "烹饪课程",
                Date = DateTime.Now.AddDays(-20),
                Description = "学习制作正宗的意大利菜肴。",
                Category = "美食",
                IsCancelled = false,
                City = "罗马",
                Venue = "烹饪学院",
                Latitude = 41.9028,
                Longitude = 12.4964
            },
            new Activity
            {
                Title = "山地徒步",
                Date = DateTime.Now.AddDays(-25),
                Description = "穿越瑞士阿尔卑斯山的徒步旅行。",
                Category = "户外",
                IsCancelled = false,
                City = "苏黎世",
                Venue = "瑞士阿尔卑斯山",
                Latitude = 47.3769,
                Longitude = 8.5417
            }
        };
        context.Activities.AddRange(activities);
        //保存所以更改
        await context.SaveChangesAsync();
    }
}
