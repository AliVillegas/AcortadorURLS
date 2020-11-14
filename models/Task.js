const knex = require('../database/connection');

exports.PENDING = 'pending';

exports.all = () => {
    return knex
        .select('*')
        .from('tasks')
        .orderBy('status', 'desc')
        .orderBy('id', 'desc');
}

exports.create = (task) => {
    return knex('tasks')
        .insert({ description: task.description });
}

exports.find = (id) => {
    return knex
        .select('*')
        .from('tasks')
        .where('id', id)
        .first();
}

exports.done = (id) => {
    return knex
        .select('*')
        .from('tasks')
        .where('id', id)
        .first()
        .update({
            status: 'done',
        }).then(() => {
            return knex.select('*')
                .from('tasks')
                .where('id', id)
                .first()

        })


}

exports.delete = (id) => {
    return knex
        .select('*')
        .from('tasks')
        .where('id', id)
        .first().del()

}