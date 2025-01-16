import PropTypes from 'prop-types'; 

const Recipe = ({recipe}) => {
    console.log(recipe)
    return (
        <div>
            
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
}

export default Recipe;