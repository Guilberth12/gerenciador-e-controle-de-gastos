import { IncomeType } from "../../model/incomeTypeModel";

export async function createIncomeType(req, res) {
    const { title, description } = req.body;

    try {
        const newIncomeType = await IncomeType.create({ title, description });
        res.status(201).json(newIncomeType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function findIncomeTypes(req, res) {
    try {
        const incomeTypes = await IncomeType.find();
        res.status(200).json(incomeTypes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function updateIncomeType(req, res) {
    const { id } = req.params;
    const { title, description } = req.body

    try {
        const updatedIncomeType = await IncomeType.findByIdAndUpdate(id, { title, description }, { new: true })
        if (!updatedIncomeType) {
            return res.status(404).json({ message: "Tipo de renda não encontrada" });
        }
        res.status(400).json(updatedIncomeType);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export async function deleteIncomeType(req, res) {
    const { id } = req.params;

    try {
        const deletedIncomeType = await IncomeType.findByIdAndDelete(id);
        if (!deletedIncomeType) {
            return res.status(404).json({ message: "Tipo de renda não encontrada" });
        }
        res.status(200).json({ message: "Tipo de renda excluída com sucesso" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
// Implementar as funções para atualizar e excluir tipos de rendas?