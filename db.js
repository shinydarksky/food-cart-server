import mysql from 'mysql'

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'animal_app',
	timezone: 'Asia/Ho_Chi_Minh',
})

export default db
