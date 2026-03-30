

export default function crudRepository(schema) {
    return {
        model: schema,
        create: async (data) => {
            const newDocument = await this.model.create(data);
            return newDocument;
        },
        getAll: async () => {
            const allDocuments = await this.model.find();
            return allDocuments;
        },
        getById: async (id) => {
            const document = await this.model.findById(id);
            return document;
        },
        delete: async (id) => {
            const deletedDocument = await this.model.findByIdAndDelete(id);
            return deletedDocument;
        },
        update: async (id, data) => {
            const updatedDocument = await this.model.findByIdAndUpdate(id, data, { new: true });
            return updatedDocument;
        }
    }
}