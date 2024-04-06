const MainRouter = {
    Home: "Home",
    Rank: "Rank",
    Community: "Community",
    Me: "Me",
    Main: "Main"
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
    taskscenter: {
        explore: {
            detail: "me/taskscenter/explore/detail",
            explore: "me/taskscenter/explore/explore",
        },
        accepted: {
            draft: "me/taskscenter/accepted/draft",
            completed: {
                completed: "me/taskscenter/accepted/completed",
                claim: "me/taskscenter/accepted/completed/claim"
            }
        },
    }
}

const CommunityRouter = {
    group: "community/group",
    detail: "community/detail",
    message: "community/message"
}

const RankRouter = {
    rank: "rank"
}

export default { HomeRouter, MainRouter, RankRouter, MeRouter, CommunityRouter }