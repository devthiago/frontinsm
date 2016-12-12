import styles from './style.css';

export default class Input extends BaseComponent {
  static defaultProps = {
    type: 'default',
    onChange: (e) => {}
  }

  static propTypes = {
    value: React.PropTypes.string,
    type: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func
  }

  getClassName() {
    const { type } = this.props;
    return styles.default;
  }

  render() {
    const { placeholder, onChange, value } = this.props;
    return (
      <input
        type="text"
        className={this.getClassName()}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}
