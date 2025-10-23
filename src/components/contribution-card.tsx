import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export interface ContributionDetails {
  title: string;
  description: string;
  year: string;
  events?: string[],
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function ContributionCard({
  title,
  description,
  events,
  year,
  image,
  links,
}: ContributionDetails) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {year && (
          <time className="text-xs text-muted-foreground">{year}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {/* TODO: styling */}
        {/* {events && events.length > 0 && (
          <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
            {events.map((e, idx) => (
              <Badge
                key={idx}
                title={e}
                className="flex gap-2 text-xs font-medium px-2 py-0.5 rounded-full"
                variant={"tag"}
              >
                {e}
              </Badge>
            ))}
          </div>
        )} */}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
