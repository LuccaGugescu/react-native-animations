import { MotiView } from 'moti'

export default function Loading({ size }: { size: number }) {
    return (
        <MotiView
            from={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: 0,
                shadowOpacity: 0.5
            }}

            animate={{
                width: size + 20,
                height: size + 20,
                borderRadius: (size + 20) / 2,
                borderWidth: size / 10,
                shadowOpacity: 1


            }}
            transition={
                {
                    type: "timing",
                    duration: 2000,
                    loop: true,
                    repeatReverse: false
                }
            }

            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: size / 10,
                borderColor: "#fff",
                shadowColor: "#fff",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 120,

            }}
        />
    )
}