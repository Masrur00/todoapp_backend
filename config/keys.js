module.exports = {
    mongodb: {
        local: {
            host: "localhost",
            port: "27017",
            database: "todoapp",
        },
        dev: [
            {
                host: "azkaban-shard-00-01-tnkar.mongodb.net",
                port: "27017",
                database: "quizr_dev",
                sec_database: "quizr_platform_dev",
                username: "masoom",
                password: "qXhYlQVI1Hv9enQT",
                host_1: "azkaban-shard-00-00-tnkar.mongodb.net",
                port_1: "27017",
                host_2: "azkaban-shard-00-02-tnkar.mongodb.net",
                port_2: "27017",
                replicaSet: "Azkaban-shard-0",
            },
            {
                host: "azkaban-shard-00-01-tnkar.mongodb.net",
                port: "27017",
                database: "faceprep_beta",
                username: "face_beta_user",
                password: "hjQNajazCCojpLZH",
                host_1: "azkaban-shard-00-00-tnkar.mongodb.net",
                port_1: "27017",
                host_2: "azkaban-shard-00-00-tnkar.mongodb.net",
                port_2: "27017",
                replicaSet: "Azkaban-shard-0",
            },
        ],
    }
}
