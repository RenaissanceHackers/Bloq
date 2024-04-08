const MainRouter = {
    Home: "Home",
    Rank: "Rank",
    TasksCenter: "TasksCenter",
    Me: "Me",
}
const HomeRouter = {
    home: "home",
    article: {
        article: "home/article",
        comment: "home/article/comment",
        share: "home/article/share"
    }
}
const MeRouter = {
    me: "me",
    profile: { profile: "me/profile", },
    wallet: {
        wallet: "me/wallet",
        send: {
            send: "me/wallet/send",
            next: "me/wallet/send/next",
            successfully: "me/wallet/send/successfully",
        },
        receive: "me/wallet/receive",
        swap: {
            next: "me/wallet/swap/next",
            successfully: "me/wallet/swap/successfully",
            swap: "me/wallet/swap",
        }
    },
    settings: {
        settings: "me/settings",
        appearance: "me/settings/appearance",
        notifications: "me/settings/notifications",
        feedback: "me/settings/feedback",
    },
    mycontent: {
        article: {
            article: "me/mycontent/article",
            detail: "me/mycontent/article/detail",
            tools: "me/mycontent/article/tools",
        },
        group: {
            group: "me/mycontent/group",
            detail: "me/mycontent/group/detail",
            management: "me/mycontent/group/detail/management",
        }
    },
    community: {
        group: "me/community/group",
        detail: "me/community/detail",
        message: "me/community/message"
    }

}

const TasksCenterRouter = {
    explore: {
        detail: "taskscenter/explore/detail",
        explore: "taskscenter/explore/explore",
    },
    accepted: {
        draft: "taskscenter/accepted/draft",
        completed: {
            completed: "taskscenter/accepted/completed",
            claim: "taskscenter/accepted/completed/claim"
        }
    },
}



const RankRouter = {
    rank: "rank"
}

export default { HomeRouter, MainRouter, RankRouter, MeRouter, TasksCenterRouter }