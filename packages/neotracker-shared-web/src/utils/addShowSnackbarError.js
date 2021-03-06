/* @flow */
import { connect } from 'react-redux';
import { sanitizeError } from 'neotracker-shared-utils';
import { setSnackbar } from '../redux';

export default connect(null, dispatch => ({
  showSnackbarError: error =>
    dispatch(setSnackbar({ message: sanitizeError(error).clientMessage })),
}));
