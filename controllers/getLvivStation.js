const connection = require("../server");
const shed = require("../server");

async function getLvivStation (req, res) {
    // const {station} = req.body;

    // if(!station) {
    //     console.log("error");
    // };

    // const schedule = connection.query("SELECT * FROM lviv", (err, result) => {
    //     console.log(result);
    //     return result;
    // });


    return res.json({
        status: "200",
        data: {
          result: sched
        }
      });
};

module.exports = getLvivStation;