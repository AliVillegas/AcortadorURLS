const knex = require('../database/connection');

exports.PENDING = 'pending';

exports.all = () => {
    return knex
        .select('*')
        .from('urls')
}

exports.last = () => {
    return knex
        .select('*')
        .from('urls')
        .orderBy('id','desc')
        .limit(1)
}
exports.create = (url) => {
    return knex('urls')
        .insert({ original: url.original, new: url.new, redirects: 0 });
}

exports.find = (id) => {
    return knex
        .select('*')
        .from('urls')
        .where('id', id)
        .first();
}
exports.updateRedirected = (id, newRedirects) => {
    return knex
        .select('*')
        .from('urls')
        .where('id', id)
        .update('redirects', newRedirects)

 
}
exports.findByShortened = (id) => {
    return knex
        .select('*')
        .from('urls')
        .where('new', id)
        .first();
}