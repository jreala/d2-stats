import React, { useState } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

/**
 *
 * @param {Object} options
 */
const Select = (props) => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(props.expanded);
    const selectedChild = props.children[selected];

    return (
        <div>
            <selectedChild.type {...selectedChild.props} onClick={() => setExpanded(!expanded)} />
            {
                expanded && map(props.children, (child, index) => (
                    <child.type
                        key={index}
                        {...child.props}
                        onClick={() => {
                            setSelected(index);
                            props.toggleSelected(child.props['data-value']);
                            setExpanded(false);
                        }}
                    />
                ))
            }
        </div>
    );
};

Select.propTypes = {
    expanded: PropTypes.bool.isRequired,
    children: PropTypes.array.isRequired,
    toggleSelected: PropTypes.func.isRequired
};

export default Select;
