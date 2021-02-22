export const useConfirm = (message = "", onConfirm, onCancel) => {
    if(!onConfirm || typeof onConfirm !== "function") {
        return;
    }

    if(onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        // if(confirmPopUP) {
        if(confirm(message)) {
          onConfirm();
        } else {
            onCancel();
        }
      };
      return confirmAction();
};

 
// class = 1대1 대응
// hooks = 불필요한 렌더가 많다?
// hooks -> consol.log 확인 필수

// props >  usecallback 으로 (추천)