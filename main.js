const f= require("./function");
const mysql= require('mysql');
const MySQLEvent=require('@rodrigogs/mysql-events');














const program = async () => {

    
    const connection = mysql.createConnection({
      host: '192.168.0.13',
      user: 'root',
      password: '2147483647'
    });
    const instance=new MySQLEvent(connection,{
        startAtEnd:true
    });
    await instance.start();
    instance.on(MySQLEvent.EVENTS.CONNECTION_ERROR, console.error)
    instance.on(MySQLEvent.EVENTS.ZONGJI_error,console.error)


    
    instance.addTrigger({
        name: 'monitor',
        expression: 'ioTest.Output.*',
        statement: MySQLEvent.STATEMENTS.ALL,
        onEvent: async(e)=>{
            console.log(e)
    }
});

    

}

program().catch(console.error)

