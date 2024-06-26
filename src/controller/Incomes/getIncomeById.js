import { getById } from "../../service/incomeService.js"

export async function getIncomeById(req, res) {
    const { id } = req.params

    try {
        const income = await getById(id);
        res.status(200).json(income)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}