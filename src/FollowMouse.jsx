import { useEffect, useState } from "react"

export const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    //Pointer move
    useEffect(() => {
        // console.log('efect', { enabled })

        const handleMove = (event) => {
            const { clientX, clientY } = event
            console.log('handleMove', { clientX, clientY })
            setPosition({ x: clientX, y: clientY })
        }

        if (enabled) {
            window.addEventListener('pointermove', handleMove)
        }

        //Cleanup
        //Se ejecuta cuando el componente se desmonta
        //Y cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
        return () => {
            // console.log('cleanup')
            window.removeEventListener('pointermove', handleMove)
        }
    }, [enabled])

    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: 'navy',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                left: -25,
                top: -25,
                width: 40,
                height: 40,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}>
            </div>
            <button onClick={() => setEnabled(!enabled)}>
                {enabled ? 'Desactivar' : 'Activar'} Seguir Puntero
            </button>
        </>
    )
}