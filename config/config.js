module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "krishna@2002",
    DB: "usersdetails",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};