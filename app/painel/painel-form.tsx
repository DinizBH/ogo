"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { HomeContentData } from "@/lib/home-content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FileDrop from "@/components/FileDrop";

const mediaUrl = (id?: string | null) => (id ? `/api/media/${id}` : undefined);

async function uploadMedia(file: File, alt?: string) {
  const formData = new FormData();
  formData.append("file", file);
  if (alt) formData.append("alt", alt);

  const response = await fetch("/api/admin/media", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Falha ao enviar imagem");
  }

  return response.json() as Promise<{ id: string; url: string }>;
}

export default function PainelForm({ initialData }: { initialData: HomeContentData }) {
  const [data, setData] = useState<HomeContentData>(initialData);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const stepsValue = useMemo(() => data.about.steps.join("\n"), [data.about.steps]);
  const bulletsValue = useMemo(() => data.video.bullets.join("\n"), [data.video.bullets]);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Falha ao salvar");
      setMessage("Conteúdo salvo com sucesso.");
    } catch (error) {
      setMessage("Erro ao salvar. Tente novamente.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card text-foreground shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">Conteúdo da Home</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" defaultValue={["hero", "about"]} className="space-y-4">
            <AccordionItem value="hero" id="panel-hero" className="scroll-mt-24">
              <AccordionTrigger>Hero</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 md:grid-cols-2 text-foreground">
                  <div className="space-y-2">
                    <Label>Título principal do hero</Label>
                    <Input
                      value={data.hero.title}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          hero: { ...prev.hero, title: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Subtítulo do hero</Label>
                    <Input
                      value={data.hero.subtitle}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          hero: { ...prev.hero, subtitle: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Texto do botão WhatsApp</Label>
                    <Input
                      value={data.hero.whatsappText}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          hero: { ...prev.hero, whatsappText: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Texto do botão telefone</Label>
                    <Input
                      value={data.hero.phoneText}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          hero: { ...prev.hero, phoneText: event.target.value },
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <FileDrop
                    label="Imagem do hero"
                    previewUrl={mediaUrl(data.hero.imageId)}
                    onFileSelected={async file => {
                      const uploaded = await uploadMedia(file, "Hero");
                      setData(prev => ({
                        ...prev,
                        hero: { ...prev.hero, imageId: uploaded.id },
                      }));
                    }}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="about" id="panel-about" className="scroll-mt-24">
              <AccordionTrigger>Empresa</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 md:grid-cols-2 text-foreground">
                  <div className="space-y-2">
                    <Label>Chamada superior (eyebrow)</Label>
                    <Input
                      value={data.about.eyebrow}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          about: { ...prev.about, eyebrow: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Título da seção</Label>
                    <Input
                      value={data.about.title}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          about: { ...prev.about, title: event.target.value },
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="space-y-2">
                    <Label>Texto introdutório</Label>
                    <Textarea
                      value={data.about.intro}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          about: { ...prev.about, intro: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Parágrafo principal</Label>
                    <Textarea
                      value={data.about.paragraph1}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          about: { ...prev.about, paragraph1: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Parágrafo de reforço</Label>
                    <Textarea
                      value={data.about.paragraph2}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          about: { ...prev.about, paragraph2: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Lista de passos (1 por linha)</Label>
                    <Textarea
                      value={stepsValue}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          about: {
                            ...prev.about,
                            steps: event.target.value.split("\n").filter(Boolean),
                          },
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <FileDrop
                    label="Imagem do sobre"
                    previewUrl={mediaUrl(data.about.imageId)}
                    onFileSelected={async file => {
                      const uploaded = await uploadMedia(file, "Sobre");
                      setData(prev => ({
                        ...prev,
                        about: { ...prev.about, imageId: uploaded.id },
                      }));
                    }}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="video" id="panel-video" className="scroll-mt-24">
              <AccordionTrigger>Vídeo</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 md:grid-cols-2 text-foreground">
                  <div className="space-y-2">
                    <Label>Chamada superior (eyebrow)</Label>
                    <Input
                      value={data.video.eyebrow}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          video: { ...prev.video, eyebrow: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Título do bloco</Label>
                    <Input
                      value={data.video.title}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          video: { ...prev.video, title: event.target.value },
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="space-y-2">
                    <Label>Texto explicativo</Label>
                    <Textarea
                      value={data.video.subtitle}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          video: { ...prev.video, subtitle: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>URL do vídeo (YouTube)</Label>
                    <Input
                      value={data.video.videoUrl}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          video: { ...prev.video, videoUrl: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Lista de destaques (1 por linha)</Label>
                    <Textarea
                      value={bulletsValue}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          video: {
                            ...prev.video,
                            bullets: event.target.value.split("\n").filter(Boolean),
                          },
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <FileDrop
                    label="Imagem do vídeo"
                    previewUrl={mediaUrl(data.video.imageId)}
                    onFileSelected={async file => {
                      const uploaded = await uploadMedia(file, "Vídeo");
                      setData(prev => ({
                        ...prev,
                        video: { ...prev.video, imageId: uploaded.id },
                      }));
                    }}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="services" id="panel-services" className="scroll-mt-24">
              <AccordionTrigger>Serviços</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <Label>Chamada da seção</Label>
                  <Input
                    value={data.services.subtitle}
                    onChange={event =>
                      setData(prev => ({
                        ...prev,
                        services: { ...prev.services, subtitle: event.target.value },
                      }))
                    }
                  />
                </div>
                <div className="mt-4 grid gap-4">
                  {data.services.items.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-muted/30 p-4"
                    >
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                          <Label>Nome do ícone (feather)</Label>
                          <Input
                            value={item.icon}
                            onChange={event =>
                              setData(prev => {
                                const items = [...prev.services.items];
                                items[index] = { ...items[index], icon: event.target.value };
                                return { ...prev, services: { ...prev.services, items } };
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label>Título do serviço</Label>
                          <Input
                            value={item.title}
                            onChange={event =>
                              setData(prev => {
                                const items = [...prev.services.items];
                                items[index] = { ...items[index], title: event.target.value };
                                return { ...prev, services: { ...prev.services, items } };
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="mt-3 space-y-2">
                        <Label>Descrição do serviço</Label>
                        <Textarea
                          value={item.description}
                          onChange={event =>
                            setData(prev => {
                              const items = [...prev.services.items];
                              items[index] = { ...items[index], description: event.target.value };
                              return { ...prev, services: { ...prev.services, items } };
                            })
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="podcasts" id="panel-podcasts" className="scroll-mt-24">
              <AccordionTrigger>Podcasts</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 md:grid-cols-2 text-foreground">
                  <div className="space-y-2">
                    <Label>Chamada superior (eyebrow)</Label>
                    <Input
                      value={data.podcasts.eyebrow}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          podcasts: { ...prev.podcasts, eyebrow: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Título da seção</Label>
                    <Input
                      value={data.podcasts.title}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          podcasts: { ...prev.podcasts, title: event.target.value },
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <Label>Subtítulo da seção</Label>
                  <Input
                    value={data.podcasts.subtitle}
                    onChange={event =>
                      setData(prev => ({
                        ...prev,
                        podcasts: { ...prev.podcasts, subtitle: event.target.value },
                      }))
                    }
                  />
                </div>
                <div className="mt-4 grid gap-4">
                  {data.podcasts.items.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-muted/30 p-4"
                    >
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label>Título do podcast</Label>
                          <Input
                            value={item.title}
                            onChange={event =>
                              setData(prev => {
                                const items = [...prev.podcasts.items];
                                items[index] = { ...items[index], title: event.target.value };
                                return { ...prev, podcasts: { ...prev.podcasts, items } };
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Duração (ex.: 3:51:30)</Label>
                          <Input
                            value={item.duration}
                            onChange={event =>
                              setData(prev => {
                                const items = [...prev.podcasts.items];
                                items[index] = { ...items[index], duration: event.target.value };
                                return { ...prev, podcasts: { ...prev.podcasts, items } };
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="mt-3 space-y-2">
                        <Label>Descrição do episódio</Label>
                        <Textarea
                          value={item.description}
                          onChange={event =>
                            setData(prev => {
                              const items = [...prev.podcasts.items];
                              items[index] = { ...items[index], description: event.target.value };
                              return { ...prev, podcasts: { ...prev.podcasts, items } };
                            })
                          }
                        />
                      </div>
                      <div className="mt-3 space-y-2">
                        <Label>URL do vídeo (YouTube)</Label>
                        <Input
                          value={item.videoUrl}
                          onChange={event =>
                            setData(prev => {
                              const items = [...prev.podcasts.items];
                              items[index] = { ...items[index], videoUrl: event.target.value };
                              return { ...prev, podcasts: { ...prev.podcasts, items } };
                            })
                          }
                        />
                      </div>
                      <div className="mt-3">
                        <FileDrop
                          label="Imagem do podcast"
                          previewUrl={mediaUrl(item.imageId)}
                          onFileSelected={async file => {
                            const uploaded = await uploadMedia(file, item.title);
                            setData(prev => {
                              const items = [...prev.podcasts.items];
                              items[index] = { ...items[index], imageId: uploaded.id };
                              return { ...prev, podcasts: { ...prev.podcasts, items } };
                            });
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contact" id="panel-contact" className="scroll-mt-24">
              <AccordionTrigger>Contato e mapa</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 md:grid-cols-2 text-foreground">
                  <div className="space-y-2">
                    <Label>Título da seção</Label>
                    <Input
                      value={data.contact.title}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          contact: { ...prev.contact, title: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Texto de apoio</Label>
                    <Input
                      value={data.contact.subtitle}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          contact: { ...prev.contact, subtitle: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Texto do botão WhatsApp</Label>
                    <Input
                      value={data.contact.whatsappText}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          contact: { ...prev.contact, whatsappText: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Telefone exibido</Label>
                    <Input
                      value={data.contact.phoneText}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          contact: { ...prev.contact, phoneText: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Endereço completo</Label>
                    <Input
                      value={data.contact.address}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          contact: { ...prev.contact, address: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Horário de atendimento</Label>
                    <Input
                      value={data.contact.hours}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          contact: { ...prev.contact, hours: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>CEP</Label>
                    <Input
                      value={data.map.cep}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          map: { ...prev.map, cep: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Endereço exibido no mapa</Label>
                    <Input
                      value={data.map.address}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          map: { ...prev.map, address: event.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Texto de busca do mapa</Label>
                    <Input
                      value={data.map.query}
                      onChange={event =>
                        setData(prev => ({
                          ...prev,
                          map: { ...prev.map, query: event.target.value },
                        }))
                      }
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <div className="sticky bottom-6 flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-lg">
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Salvando..." : "Salvar alterações"}
        </Button>
        {message ? <span className="text-sm text-foreground/70">{message}</span> : null}
      </div>
    </div>
  );
}
