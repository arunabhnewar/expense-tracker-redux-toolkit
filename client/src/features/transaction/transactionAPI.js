import axios from "../../utilities/axios";

// Get the transaction
export const getTransactions = async () => {
    const response = await axios.get('/transactions');

    return response.data;
};


// Add a transaction
export const addTransaction = async (data) => {
    const response = await axios.post('/transactions', data);

    return response.data;
}


// Edit a transaction
export const editTransaction = async (id, data) => {
    const response = await axios.put(`/transactions/${id}`, data);

    return response.data;
}


// Delete a transaction
export const deleteTransaction = async (id) => {
    const response = await axios.delete(`/transactions/${id}`);

    return response.data;
}