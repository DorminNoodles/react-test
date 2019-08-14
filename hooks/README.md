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

You can add array in second parameters of `useEffect`.

    const [count, setCount] = useState(0);

     useEffect(() => {
        setCount(0);
      }, [count])

Here React check if count is changed before launch effect.

Try without array.

    const [count, setCount] = useState(0);

     useEffect(() => {
        setCount(0);  
      })

In this case if count is always == to 0, there no re-rendering but i you change count useEffect wiil be recalled


06 HooksCustom
Hors-ligne

07 CallApi
Leanne Graham

Ervin Howell

Clementine Bauch

Patricia Lebsack

Chelsey Dietrich

Mrs. Dennis Schulist

Kurtis Weissnat

Nicholas Runolfsdottir V

Glenna Reichert

Clementina DuBuque
