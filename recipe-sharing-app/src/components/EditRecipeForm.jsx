import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
