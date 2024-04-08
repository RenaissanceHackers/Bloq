
type ArticleCard = {
    id: string;
    image: string | null;
    title: string;
    date: string;
    source: string;
    description: string;
}
export type GroupCard = {
    id: string;
    image: string | null;
    name: string;
}
type UserRankCard = {
    id: string;
    image: string | null;
    name: string;
    rank: number;
}

type ArticleContent = {
    id: string;
    image: string | null;
    title: string;
    date: string;
    source: string;
    description: string;
    content: string;
    comments: number[];
    commentNumber: number;
    likeNumber: number;
    favoriteNumber: number;
    transmitNumber: number;
}

export type Comment = {
    id: string; // 假设每个评论有一个唯一的ID
    name: string; // 评论者的名字
    image: string | null; // 评论者的头像图片URL
    content: string; // 评论内容
    commentDate: string; // 评论日期
    replies?: Comment[]; // 可选属性，表示回复评论的数组
    replyUser: string | null;
    depth: number;
}

type User = {
    id: string;
    name: string;
    followers: number;
    followering: number;
    subscrive: number;
    introduction: string;
}

export type MessageCard = {
    id: string;
    image: string | null;
    name: string;
    message: string;
    recentTime: string;
    unReadedMessageNumber: number;
}

export type GroupDetail = {
    id: string;
    groupImage: string | null;
    name: string;
    notes: string;
    creator: string;
    creatorImage: string | null;
    posts: postCard[];
    followers: number;
}
export type postCard = {
    id: string;
    title: string;
    description: string;
    image: string | null;
}
export type tokenCard = {
    id: string;
    name: string;
    image: string | null;
    rank: number;
}

export type MemberCard = {
    id: string;
    name: string
    image: string | null;
}

export type TaskCardProp = {
    id: string,
    name: string,
    image: string | null,
    assignment: string,
    point: number
    token?: number
    participants: number
}



export type TaskCard3Prop = {
    id: string,
    date: string,
    assignment: string,
    completed: boolean
}

export type RouteParamList = {
    "me": undefined,
    "me/profile": undefined,
    "me/wallet": undefined,
    "me/wallet/send": undefined,
    "me/wallet/send/next": undefined,
    "me/wallet/send/successfully": undefined,
    "me/wallet/receive": undefined,
    "me/wallet/swap/next": undefined,
    "me/wallet/swap/successfully": undefined,
    "me/wallet/swap": undefined,
    "me/settings": undefined,
    "me/settings/appearance": undefined,
    "me/settings/notifications": undefined,
    "me/settings/feedback": undefined,
    "me/mycontent/article": undefined,
    "me/mycontent/article/detail": { articleId: string },
    "me/mycontent/article/tools": undefined,
    "me/mycontent/group": undefined,
    "me/mycontent/group/detail": { groupId: string },
    "me/mycontent/group/detail/management": undefined,
    "taskscenter/explore/explore": undefined,
    "taskscenter/explore/detail": { taskId: string },
    "taskscenter/accepted/draft": undefined,
    "taskscenter/accepted/completed": undefined,
    "taskscenter/accepted/completed/claim": undefined,
    "Home": undefined,
    "Rank": undefined,
    "TasksCenter": undefined,
    "Me": undefined,
    "home": undefined;
    "home/article": { articleId: string };
    "home/article/comment": undefined;
    "home/article/share": undefined;
    "me/community/group": undefined,
    "me/community/detail": { groupId: string },
    "me/community/message": undefined
    "rank": undefined;
}




export { ArticleCard, ArticleContent, UserRankCard }