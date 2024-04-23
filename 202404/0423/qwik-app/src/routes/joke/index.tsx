import { component$ } from "@builder.io/qwik";
import { Form, routeAction$, routeLoader$ } from "@builder.io/qwik-city";

export const useDadJoke = routeLoader$(async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  return (await response.json()) as {
    id: string;
    status: number;
    joke: string;
  };
});

export const useJokeVOteAction = routeAction$((props) => {
  console.log("VOTE", props);
});
export default component$(() => {
  const dataJokeSignal = useDadJoke();
  const favoriteJokeAction = useJokeVOteAction();
  return (
    <section>
      <p>{dataJokeSignal.value.joke}</p>
      <Form action={favoriteJokeAction}>
        <input type="text" name={"jokeId"} value={dataJokeSignal.value.id} />
        <button name={"vote"} value={"up"}>
          👍
        </button>
        <button name={"vote"} value={"down"}>
          👎
        </button>
      </Form>
    </section>
  );
});
