<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  export let currentDate!: Date;
  export let events!: { title: string; date: Date; type: 'show' | 'music' | 'other' }[];

  let weeks: Date[][] = [];

  onMount(() => {
    generateCalendar(currentDate);
  });

  function generateCalendar(date: Date) {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const startDay = startOfMonth.getDay();
    const endDay = endOfMonth.getDate();

    let days: Date[] = [];
    for (let i = 1 - startDay; i <= endDay; i++) {
      days.push(new Date(date.getFullYear(), date.getMonth(), i));
    }

    while (days.length % 7 !== 0) {
      days.push(new Date(date.getFullYear(), date.getMonth(), days.length - startDay + 1));
    }

    weeks = [];

    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
  }

  function getEvent(day: Date) {
    return events.find(event => {
      return event.date.getDate() === day.getDate() && event.date.getMonth() === day.getMonth();
    })!;
  }

  function getEventColor(day: Date) {
    const event = getEvent(day)!;

    switch (event.type) {
      case 'show':
        return 'bg-emerald-300';
      case 'music':
        return 'bg-cyan-200';
      case 'other':
        return 'bg-red-300';
    }
  }

  function isEvent(day: Date) {
    return events.some(event => {
      return event.date.getDate() === day.getDate() && event.date.getMonth() === day.getMonth();
    });
  }

  function isEventOtherDay(day: Date) {
    return isEvent(day) && !isToday(day);
  }

  function IsEventToday(day: Date) {
    return isEvent(day) && isToday(day);
  }

  function isToday(day: Date) {
    return day.getDate() === currentDate.getDate();
  }

  function isPastDate(day: Date) {
    return day.getMonth() === currentDate.getMonth() && day.getDate() < currentDate.getDate() && !isEvent(day);
  }

  function isFutureDateInMonth(day: Date) {
    return day.getMonth() === currentDate.getMonth() && day.getDate() > currentDate.getDate() && !isEvent(day);
  }
</script>

<div>
  <h2 class="text-4xl md:text-5xl mb-5 text-emerald-800 hover:text-cyan-200 hover:cursor-pointer duration-300">
    Calendar
  </h2>

  <h3 class="text-2xl font-bold text-center" in:fly={{ delay: 600, duration: 1000, y: 50 }}>
    {currentDate.toLocaleString('default', { month: 'long' })}
    {currentDate.getFullYear()}
  </h3>

  <div class="flex justify-center space-x-4 mt-2" in:fly={{ delay: 800, duration: 1000, y: 50 }}>
    <div class="flex items-center space-x-2">
      <div class="w-4 h-4 bg-emerald-300 rounded"></div>
      <span>Show</span>
    </div>
    <div class="flex items-center space-x-2">
      <div class="w-4 h-4 bg-cyan-200 rounded"></div>
      <span>New Music</span>
    </div>
    <div class="flex items-center space-x-2">
      <div class="w-4 h-4 bg-red-300 rounded"></div>
      <span>Other</span>
    </div>
  </div>

  <div
    class="select-none grid grid-cols-7 gap-2 md:gap-5 px-4 md:px-5 py-2 text-center font-bold"
    in:fly={{ delay: 1000, duration: 1000, y: 50 }}
  >
    {#each ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as day}
      <div>{day}</div>
    {/each}
  </div>
  <div class="grid grid-cols-7 gap-2 md:gap-4 px-4 md:px-5 py-1" in:fly={{ delay: 1200, duration: 1000, y: 50 }}>
    {#each weeks as week}
      {#each week as day}
        <div
          class="relative group hover:cursor-pointer hover:text-cyan-500 duration-300 md:text-xl select-none p-1 md:p-2 text-center ring-2 ring-orange-300 rounded-md
        {isToday(day) && !isEvent(day) ? 'text-blue-500 bg-orange-300 ring-blue-500' : ''}
        {isEventOtherDay(day) ? `${getEventColor(day)} text-slate-700` : ''}
        {isPastDate(day) ? 'bg-orange-200 text-slate-700 ' : ''}
        {IsEventToday(day) ? `${getEventColor(day)} text-cyan-500 ring-emerald-500` : ''}
        {isFutureDateInMonth(day)
            ? 'text-slate-700 hover:bg-transparent bg-orange-300'
            : ' ring-orange-200 hover:bg-orange-200'}"
        >
          {day.getDate()}
          {#if isEvent(day)}
            <div
              class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
            >
              {getEvent(day).title}
            </div>
          {/if}
        </div>
      {/each}
    {/each}
  </div>
</div>
