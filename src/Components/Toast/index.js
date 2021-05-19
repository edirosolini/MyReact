import Colors from "../../Commons/colors";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./styles.css";

/* Assets */
import checkIcon from "../../Assets/check.svg";
import errorIcon from "../../Assets/error.svg";
import infoIcon from "../../Assets/info.svg";
import warningIcon from "../../Assets/warning.svg";

const propertiesToast = (type) => {
  switch (type) {
    case "success":
      return {
        backgroundColor: Colors.success,
        icon: checkIcon,
      };
    case "danger":
      return {
        backgroundColor: Colors.danger,
        icon: errorIcon,
      };
    case "info":
      return {
        backgroundColor: Colors.info,
        icon: infoIcon,
      };
    case "warning":
      return {
        backgroundColor: Colors.warning,
        icon: warningIcon,
      };
    default:
      return { backgroundColor: Colors.ligthGrey };
  }
};

const Toast = (props) => {
  const {
    updateToast,
    title,
    description,
    backgroundColor,
    icon,
    position,
    autoDelete,
    dismissTime,
  } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete) {
        deleteToast();
      }
    }, dismissTime);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line
  }, [autoDelete, dismissTime]);

  const deleteToast = () => {
    updateToast(null, null, null);
  };

  return (
    <div className="Toast">
      {title || description ? (
        <div className={`notification-container ${position}`}>
          <div
            className={`notification ${position}`}
            style={{ backgroundColor: backgroundColor }}
          >
            <button onClick={() => deleteToast()}>X</button>
            {icon ? (
              <div className="notification-image">
                <img src={icon} alt="" />
              </div>
            ) : (
              <div />
            )}
            <div>
              {title ? <p className="notification-title">{title}</p> : <p />}
              {description ? (
                <p className="notification-message">{description}</p>
              ) : (
                <p />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

Toast.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.oneOf(["success", "danger", "info", "warning"]),
  backgroundColor: PropTypes.string,
  icon: PropTypes.string,
  position: PropTypes.oneOf([
    "top-right",
    "bottom-right",
    "top-left",
    "bottom-left",
  ]),
  autoDelete: PropTypes.bool,
  dismissTime: PropTypes.number,
};

Toast.defaultProps = {
  position: "bottom-right",
  autoDelete: true,
  dismissTime: 30000,
};

const mapStateToProps = (state) => {
  const properties = propertiesToast(state.toast.typeToast);
  return {
    title: state.toast.title,
    description: state.toast.description,
    backgroundColor: properties.backgroundColor,
    icon: properties.icon,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateToast(title, description, typeToast) {
    dispatch({
      type: "UPDATE_TOAST",
      title,
      description,
      typeToast,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
