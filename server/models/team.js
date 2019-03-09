'use strict';

module.exports = function(Team) {

    /**
    * Include all related models.
    * @param {Function(Error, object)} callback
    */

    Team.include_all_data = function(callback) {
        var result = [];
        var filter = {
            // fields: ['id', 'title', 'content', 'author'],
            include: {programmers: {languages: ['paradigms']}}
        };

        Team.find(filter, function(err, teams) {
            if (err !== null) {
                return callback(err);
            }

            if (teams.length) {
                teams.forEach(function(team) {
                    result.push(team);
                });
            }

            if (result.length) {
                callback(null, result);
            }
            else {
                callback(null, []);
            }
        });
    };
};
