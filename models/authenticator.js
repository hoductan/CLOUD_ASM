var pg_conn=require("./pg_config")
async function authen(user,pass){
    var authenticated = false;
const acc_query=
{
    name: 'fetch-user',
    text:'SELECT * FROM users WHERE name=$1 AND passwd=$2',
    values:[user,pass]
}
query_data= await pg_conn.query(acc_query);

if(query_data.rowCount==1) authenticated = true
return authenticated;
}

module.exports=authen;