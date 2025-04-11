export const useNotesListViewModel = ({ notes, loading, onEdit, onDelete }) => {
    const getContentMessage = () => {
      if (loading) return 'Cargando notas...';
      if (notes.length === 0) return 'No hay notas disponibles.';
      return null;
    };
  
    return {
      notes,
      contentMessage: getContentMessage(),
      handlers: {
        onEdit,
        onDelete
      }
    };
  };