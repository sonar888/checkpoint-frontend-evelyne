type InputProps = {
    name: string;
    value?: string;
    type?: 'text' | 'email';
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Input({name, value, onChange, type='text'}: InputProps) {
    return (
        <div className="flex flex-col mb-3 max-w-sm m-auto w-full">
            <label htmlFor={name} className="mb-1">{name}</label>
            <input 
                id={name}
                type= {type}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-700 focus:border-none" 
            />
        </div>
        
    );
}