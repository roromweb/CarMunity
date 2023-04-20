import axios from 'axios';
import { SET_MODE } from '../types';

export const setMode = (payload) => ({ type: SET_MODE, payload });
