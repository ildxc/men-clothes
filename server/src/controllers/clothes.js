export const getAllClothes = async (req, res) => {
    try {
        res.status(200).json('ok');
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
