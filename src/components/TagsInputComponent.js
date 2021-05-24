import React from 'react';
import TagsInput from 'react-tagsinput';

import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

export default class TagsInputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tags: [] }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(tags) {
        this.setState({ tags }, () => {
            this.props.onChange({
                persist: () => { },
                target: {
                    type: "change",
                    id: this.props.id,
                    name: this.props.name,
                    value: this.state.tags.join(',')
                }
            });
        })
    }

    render() {
        return <TagsInput value={this.state.tags} className="form_field w-100 p-3" placeholder={''} onChange={this.handleChange} />
    }
}