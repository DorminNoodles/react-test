## HOOKS
### 01 HooksStartup

Create your first hook

### 02 UseEffectMultiple

You can add mutiple `useEffect` in your component


### 03 UseStateWithoutDiff

Call hook but with no differences from the previous value and we'll see no re-rendering

### 04 UseEffectCleanup

Call when component is dismount, you can for example unsubscribe user.

### 05 SkippingEffect

You can add array in second parameters of `useEffect`. UseEffect will be called if `count` is changed.

    const [count, setCount] = useState(0);

     useEffect(() => {
        setCount(0);
      }, [count])


### 06 HooksCustom

You can create your own Hooks, by convention named `useFoo....`

    function useFriendStatus(friendID) {
        const [isOnline, setIsOnline] = useState(null);
        
        useEffect(() => {
            ...code
        })
    }
    
    function HooksCustom() {
        const isOnline = useFriendStatus(1);
    }


### 07 CallApi

Simple example for call api and get users.
