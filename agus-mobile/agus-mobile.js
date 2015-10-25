if (Meteor.isClient) {
    var db;

    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.MainTemplate.helpers({
        counter: function () {
            return Session.get('counter');
        },
        message: function(){
            return Session.get('message');
        },
        res: function(){
            return Session.get('res');
        }
    });

    Template.MainTemplate.events({
        'click #sql_check': function () {
            Session.set('message', Meteor.isCordova ? "Cordova" : "Not Cordova");
            console.log(Meteor.isCordova ? "Cordova" : "Not Cordova");
        },
        'click #sql_start': function () {
            db = window.sqlitePlugin.openDatabase({name: "my.db"});

            console.log("SQL Started.")
        },
        'click #sql_createTable': function () {
            db.transaction(function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS test_table');
                tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, data text, data_num integer)');
            });

            console.log("Table created.")
        },
        'click #sql_deleteTable': function () {
            db.transaction(function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS test_table');
            });

            console.log("Table created.")
        },
        'click #sql_createInsertData': function () {
            db.transaction(function(tx) {
                tx.executeSql("INSERT INTO test_table (data, data_num) VALUES (?,?)", ["test", 100], function(tx, res) {
                    console.log("insertId: " + res.insertId + " -- probably 1");
                    console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
                }, function(e) {
                    console.log("ERROR: " + e.message);
                });
            });

            console.log("Data inserted.")
        },
        'click #sql_countData': function () {
            db.transaction(function(tx) {
                tx.executeSql("select count(id) as cnt from test_table;", [], function(tx, res) {
                    console.log("res.rows.length: " + res.rows.length + " -- should be 1");
                    console.log("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
                }, function(e) {
                    console.log("ERROR: " + e.message);
                });
            });
        },
        'click #sql_selectData': function () {
            db.transaction(function(tx) {
                tx.executeSql("select * from test_table;", [], function(tx, res) {
                    var result = [];
                    for (var i = 0; i < res.rows.length; i++)
                    {
                        console.log(res.rows.item(i));
                        result.push({
                            'id' : res.rows.item(i).id,
                            'data' : res.rows.item(i).data,
                            'data_num' : res.rows.item(i).data_num
                        });
                        Session.set("res", result);
                    }
                }, function(e) {
                    console.log("ERROR: " + e.message);
                });
            });
        },
        'click #counter': function () {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });
}

if (Meteor.isServer) {
}

Meteor.startup(function () {
    if (Meteor.isCordova){
        console.log("Initialized in Cordova.")
    } else {
        console.log("Not cordova.")
    }
});