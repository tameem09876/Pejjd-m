// status can be "online", "idle", "dnd", or "invisible" or "offline"

export default [

    {

        channelId: "1371597787740766278",

        serverId: "766953289409232896",

        token: process.env.token1,

        selfDeaf: false,

        autoReconnect: {

            enabled: true,

            delay: 5, // ثواني

            maxRetries: 5,

        },

        presence: {

            status: "idle",

        },

        selfMute: true,

    },

];
