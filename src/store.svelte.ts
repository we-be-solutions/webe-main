let sending = $state({ sending: false });

const updateSending = () => {
	sending.sending = !sending.sending;
};

export { sending, updateSending };
