import { User } from "@/src/types/Auth";

export async function GetAPIUsrByID(id:number): Promise<User | null> 
{
  try {
    const res = await fetch(
      `https://dummyjson.com/users/${id}`,
      {
        cache: 'no-store',
        next: { revalidate: 3600 },
        headers: { Accept: 'application/json' },
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch user');
    }

    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}
