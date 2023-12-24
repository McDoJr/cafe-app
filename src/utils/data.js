import {getImage} from "./food-data.js";

export const STRAPI_URL = 'http://localhost:1337';

export const createUserData = ({id, firstname, lastname, username, email, password, token, orders = []}) => {
    return {id, firstname, lastname, username, email, password, token, orders};
}

export const createOrderData = ({id, user, name, price, quantity}) => {
    return {id, user, name, price, quantity, checked: false};
}