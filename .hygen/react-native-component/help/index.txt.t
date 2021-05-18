---
message: |

    hygen {bold react-native-component new} --feature {bold FEATURE} ---shared {bold TYPE}  --name {bold NAME} {italic [--screen]} {italic [--static]} {italic [--detached]} 

    Generates a React Native component, a storybook, and a test all compliant with the EMIKETIC standard.

       NAME           The component name in kebab-case ({bold required}).
       --feature Feature to which belongs the component.
       --shared If not a feature, tells whether this is an atom, molecule or organism.
       --screen  Generate a React Native screen componant (as opposed to composablecomponents).
       --detached Generate a static component that is not connected to store but might have side-effects and API logic.
       --static Generates a static compone not (visual component).

    If no flags given, will generate a non-screen component that is connected to the Redux store.
---